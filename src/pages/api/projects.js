export default function handler(req, res) {
  res.status(200).json([
    {
      _id: 1,
      name: "Camp Site",
      description: "Nucamp Campsite is a simple camp site website",
      imageUrl: "https://",
    },
    {
      _id: 2,
      name: "Elida",
      description: "Elida is a landing page for an apartment building",
      imageUrl: "https://",
    },
  ]);
}
