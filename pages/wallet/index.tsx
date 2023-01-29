import React from "react";
import WalletAccount from "../../components/wallet/wallet-accounts";
import WalletAddress from "../../components/wallet/wallet-addresses";
import Layout from "../../shared/dashboard-layout/Layout";

const WalletPage = () => {
  return (
    <Layout>
      {/* parent div container */}
      <div>
        {/* child div containers */}
        <WalletAccount />
        <WalletAddress />
      </div>
    </Layout>
  );
};

export default WalletPage;