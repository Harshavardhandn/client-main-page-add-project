import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-primary">FreelanceHub</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={() => navigate("/bids")}
            >
              My Bids
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate("/my-projects")}
            >
              My Projects
            </Button>
            <Button
              onClick={() => navigate("/add-project")}
            >
              Add Project
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};