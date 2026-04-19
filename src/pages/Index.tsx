import dashboardHtml from "./dashboard-html";

const Index = () => (
  <iframe
    title="Meeting Prep Dashboard — Helios Robotics"
    srcDoc={dashboardHtml}
    className="w-screen h-screen border-0 block"
  />
);

export default Index;
