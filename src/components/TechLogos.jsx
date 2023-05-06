import { Icon } from "@iconify/react";

export default function TechLogos() {
  return (
    <>
      <div className="grayscale hover:scale-105 hover:grayscale-0">
        <Icon icon="logos:react" width="30" />
      </div>
      <div className="grayscale hover:scale-105 hover:grayscale-0">
        <Icon icon="logos:python" width="30" />
      </div>
      <div className="grayscale hover:scale-110 hover:grayscale-0">
        <Icon icon="vscode-icons:file-type-php2" width="30" />
      </div>
      <div className="grayscale hover:scale-105 hover:grayscale-0">
        <Icon icon="logos:mysql" width="30" />
      </div>
      <div className="grayscale hover:scale-105 hover:grayscale-0">
        <Icon icon="logos:javascript" width="30" />
      </div>
      <div className="grayscale hover:scale-105 hover:grayscale-0 pt-1">
        <Icon icon="fa6-brands:node" width="30" />
      </div>
      <div className="grayscale hover:scale-105 hover:grayscale-0">
        <Icon icon="logos:mongodb-icon" height="30" />
      </div>
      <div className="grayscale hover:scale-105 hover:grayscale-0 pt-2">
        <Icon icon="logos:tailwindcss-icon" width="30" />
      </div>
    </>
  );
}
