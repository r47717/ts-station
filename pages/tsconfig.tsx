import React from "react";
import TsConfigSummary from "../components/TsConfigSummary";
import Layout from "../components/Layout";

function TsConfigPage() {
  return (
    <Layout page="tsconfig" title="Major TS Config Compiler Options">
      <div className="card">
        <div className="card-header">Major TS Config Compiler Options</div>
        <div className="card-body">
          <TsConfigSummary />
        </div>
      </div>
    </Layout>
  );
}

export default TsConfigPage;
