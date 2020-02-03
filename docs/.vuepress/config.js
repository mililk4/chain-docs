module.exports = {
  title: "Crypto.com Chain",
  description: "Welcome to Crypto.com Chain's documentation!",
  themeConfig: {
    navbar: true,
    nav: [{
        text: "Home",
        link: "/"
      },
      {
        text: "Getting Started",
        link: "/getting-started/"
      },
      {
        text: "Thaler Testnet",
        items: [{
            text: "Setup Tutorial",
            link: "/getting-started/thaler-testnet"
          },
          {
            text: "Testnet Explorer",
            link: "https://chain.crypto.com/explorer"
          },
          {
            text: "Testnet Faucet",
            link: "https://chain.crypto.com/explorer/faucet"
          }
        ]
      },
      {
        text: "Wallet Management",
        items: [{
            text: "Overview",
            link: "/wallets/#client-cli"
          },
          {
            text: "Client CLI",
            link: "/wallets/client-cli.html#client-cli"
          },
          {
            text: "Sample Chain Wallet",
            link: "/wallets/sample-chain-wallet.html#sample-chain-wallet"
          },
          {
            text: "Client RPC",
            link: "/wallets/client-rpc.html#client-rpc"
          }
        ]
      },
      {
        text: "Download",
        link: "https://crypto-com.github.io/Crypto.com_Chain.pdf"
      }
    ],
    sidebar: {
      "/getting-started/": [
        "",
        "thaler-testnet",
        "local_full_node_development",
        "send_your_first_transaction",
        "consensus",
        "genesis",
        "chain-id-and-network-id",
        "transaction-accounting-model",
        "transaction",
        "serialization",
        "signature-schemes",
        "client-flow",
        "enclave-architecture",
        "transaction-privacy",
        "staking",
        "node-joining",
        "network-parameters",
        "notes-on-production-deployment",
        "notes-on-performance",
        "threat-model"
      ],
      "/wallets/": ["", "client-cli", "sample-chain-wallet", "client-rpc"]
    },
    displayAllHeaders: true
  },
  base: "/",
  plugins: [
    [
      "vuepress-plugin-export",
      {
        page: {
          format: 'A4',
          printBackground: true,
          margin: {
            top: 60,
            left: 20,
            right: 20,
            bottom: 60
          }
        },
        sorter: function (a, b) {
          var ordering = {
            Home: 0,
            "Getting Started": 1,
            "Thaler Testnet": 2,
            "Local Full Node Development": 3,
            "Send Your First Transaction": 4,
            Consensus: 5,
            Genesis: 6,
            "Transaction Accounting Model": 7,
            Transaction: 8,
            Serialization: 9,
            "Signature Schemes": 10,
            "Transaction Flow": 11,
            "Enclave Architecture": 12,
            "Transaction Privacy": 13,
            Staking: 14,
            "node-joining": 15,
            "network-parameters": 16,
            "Notes on Performance": 17,
            "Notes on Production Deployment": 18,
            "Threat Model": 19
          };
          return ordering[a["title"]] - ordering[b["title"]];
        }
      }
    ]
  ]
};
