
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { PhotoCamAIPrivacyPolicyPage } from "./legal/photocamai-privacy-policy.tsx";
import { PhotoCamAITermsOfUsePage } from "./legal/photocamai-terms-of-use.tsx";
import { RetroCamNeoPrivacyPolicyPage } from "./legal/retrocamneo-privacy-policy.tsx";
import { RetroCamNeoTermsOfUsePage } from "./legal/retrocamneo-terms-of-use.tsx";
import { VisualLabXPrivacyPolicyPage } from "./legal/visuallabx-privacy-policy.tsx";
import { VisualLabXTermsOfUsePage } from "./legal/visuallabx-terms-of-use.tsx";
import { WallpapersPrivacyPolicyPage } from "./legal/wallpapers-privacy-policy.tsx";
import { WallpapersTermsOfUsePage } from "./legal/wallpapers-terms-of-use.tsx";
import "./styles/index.css";

const pathname = window.location.pathname.replace(/\/+$/, "") || "/";

const routeMap: Record<string, JSX.Element> = {
  "/photocamai/privacy-policy": <PhotoCamAIPrivacyPolicyPage />,
  "/photocamai/terms-of-use": <PhotoCamAITermsOfUsePage />,
  "/retrocamneo/privacy-policy": <RetroCamNeoPrivacyPolicyPage />,
  "/retrocamneo/terms-of-use": <RetroCamNeoTermsOfUsePage />,
  "/visuallabx/privacy-policy": <VisualLabXPrivacyPolicyPage />,
  "/visuallabx/terms-of-use": <VisualLabXTermsOfUsePage />,
  "/wallpapers/privacy-policy": <WallpapersPrivacyPolicyPage />,
  "/wallpapers/terms-of-use": <WallpapersTermsOfUsePage />,
};

createRoot(document.getElementById("root")!).render(routeMap[pathname] ?? <App />);
  
