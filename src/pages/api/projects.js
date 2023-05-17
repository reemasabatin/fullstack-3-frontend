export default function handler(req, res) {
  res.status(200).json([
    {
      _id: 1,
      name: "Camp Site",
      description: "Nucamp Campsite is a simple camp site website",
      imageUrl:
        "https://d33wubrfki0l68.cloudfront.net/19c708670a1f21231c1e2efa6ba38dbf52b15343/3237e/assets/jpeg/dopefolio.jpeg",
    },
    {
      _id: 2,
      name: "Elida",
      description: "Elida is a landing page for an apartment building",
      imageUrl:
        "https://d33wubrfki0l68.cloudfront.net/9199afe42f789dbddb324ed3edd326e080e693c1/28f54/assets/jpeg/wilsonport.jpeg",
    },
  ]);
}
