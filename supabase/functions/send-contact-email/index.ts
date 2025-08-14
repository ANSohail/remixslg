import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
    })
  }

  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      legalServiceArea,
      problemDescription,
      urgencyLevel,
      contactMethod,
      bestTime
    } = await req.json()

    // Basic validation
    if (!firstName || !lastName || !email || !phone || !legalServiceArea || !problemDescription) {
      throw new Error('Missing required fields')
    }

    // Prepare email content
    const emailContent = `
      New Contact Form Submission
      
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}
      Legal Service Area: ${legalServiceArea}
      Urgency Level: ${urgencyLevel}
      Preferred Contact Method: ${contactMethod}
      Best Time to Contact: ${bestTime || 'Not specified'}
      
      Problem Description:
      ${problemDescription}
      
      ---
      This email was sent from the Sohail Law Group contact form.
    `

    // Send email using Resend API
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY not configured')
    }

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Sohail Law Group <noreply@sohaillaw.com>',
        to: ['info@sohaillaw.com'],
        subject: `New Contact Form - ${legalServiceArea} - ${firstName} ${lastName}`,
        text: emailContent,
        reply_to: email,
      }),
    })

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text()
      console.error('Resend API error:', errorText)
      throw new Error(`Failed to send email: ${errorText}`)
    }

    const result = await emailResponse.json()
    console.log('Email sent successfully:', result)

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Contact form submitted successfully!' 
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      },
    )

  } catch (error) {
    console.error('Error processing contact form:', error)
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      },
    )
  }
})