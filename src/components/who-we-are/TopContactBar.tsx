
import { Phone, Mail } from "lucide-react";

const TopContactBar = () => {
  return (
    <div className="bg-gray-100 py-2">
      <div className="container mx-auto px-4 flex items-center justify-between text-sm">
        <div className="flex items-center space-x-2 ml-8">
          <span className="text-contact">Representing clients throughout Ontario</span>
        </div>
        <div className="flex items-center space-x-6 mr-8">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-contact">
              <Phone className="h-4 w-4" style={{ color: '#ad9072' }} />
              <span>(647) 806-1190</span>
            </div>
            <div className="flex items-center space-x-2 text-contact">
              <Phone className="h-4 w-4" style={{ color: '#ad9072' }} />
              <span>(647) 230-1929</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-contact">
            <Mail className="h-4 w-4" />
            <span>info@sohaillaw.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContactBar;
