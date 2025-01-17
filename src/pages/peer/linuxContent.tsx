
const LinuxContent = () => (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-slate-200">
        Install on Linux
      </h2>
      <ol className="list-decimal list-inside space-y-2">
        <li className="text-slate-200">
          Run the following command:
          <pre className="bg-gray-700 p-4 rounded mt-2 text-slate-200">
            curl -fsSL https://pkgs.jacada.io/install.sh | sh
          </pre>
        </li>
        <li className="text-slate-200">
          Run JACADA and log in the browser:
          <pre className="bg-gray-700 p-4 rounded mt-2 text-slate-200">
            JACADA up
          </pre>
        </li>
      </ol>
    </div>
  );
  
  export default LinuxContent;