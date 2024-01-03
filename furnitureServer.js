var express = require("express");
var app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, , authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
  next();
});

var users = [
  {
    role: "ADMIN",
    name: "Edufect",
    empuserid: "1",
    email: "admin@edufect.com",
    password: "admin",
  },
  {
    role: "EMPLOYEE",
    name: "Jack Smith",
    empuserid: "2",
    email: "jack.smith@edufect.com",
    password: "jack123",
  },
];

furnitureData = [
  {
    prodCode: "DS2S245",
    category: "Dining",
    desc: ["Two	seater	Dining	Set", "Built	from	High	quality	wood", "1	year	warranty"],
    img: "https://hometown.gumlet.io/media/product/26/3773/35902/1.jpg?mode=fill&w=273&h=273&dpr=1.3",
    ingredients: [
      { ingName: "Dining	Table", qty: 1 },
      { ingName: "Chair", qty: 2 },
    ],
    title: "Two	seater	Dining	Set",
  },
  {
    prodCode: "DS6S761",
    category: "Dining",
    desc: [
      "Six	Seater	Dining	Set	in	Antique	Cherry	Colour",
      "Assembly	by	Skilled	Carpenters",
      "Made	from	Teak	wood",
    ],
    img: "https://hometown.gumlet.io/media/product/77/3773/32887/1.jpg?mode=fill&w=273&h=273&dpr=1.3",
    ingredients: [
      { ingName: "Dining	Table", qty: 1 },
      { ingName: "Chair", qty: 4 },
      { ingName: "Bench", qty: 1 },
    ],
    title: "Six	Seater	Dining	Set",
  },
  {
    prodCode: "DS4S177",
    category: "Dining",
    desc: [
      "Mild	Steel	Four	Seater	Dining	Set	in	Black	Colour",
      "Knock-down	construction	for	easy	transportation",
    ],
    img: "https://hometown.gumlet.io/media/product/79/2653/48226/1.jpg?mode=fill&w=273&h=273&dpr=1.3",
    ingredients: [
      { ingName: "Dining	Table", qty: 1 },
      { ingName: "Chair", qty: 4 },
    ],
    title: "Mild	Steel	Dining	Set",
  },
  {
    prodCode: "DC2S705",
    category: "Dining",
    desc: [
      "Solid	Wood	Dining	Chair	Set	of	Two	in	Dark	Walnut	Colour",
      "Beautiful	design	carved	on	dining	chair",
      "Dining	chair	seat	upholstered	in	dark	brown	Fabric	",
    ],
    img: "https://hometown.gumlet.io/media/product/97/3163/53089/1.jpg?mode=fill&w=335&h=335&dpr=1.3",
    ingredients: [{ ingName: "Chair", qty: 2 }],
    title: "Dining	Chair	Set",
  },
  {
    prodCode: "BN1S388",
    category: "Dining",
    desc: [
      "Solid	Wood	Dining	Bench	in	Dark	Walnut	Colour",
      "Comfortable	bench	for	a	relaxed	dinner",
    ],
    img: "https://hometown.gumlet.io/media/product/89/3063/70951/1.jpg?mode=fill&w=335&h=335&dpr=1.3",
    ingredients: [{ ingName: "Bench", qty: 1 }],
    title: "Dining	Bench",
  },
  {
    prodCode: "SF2S532",
    category: "Drawing",
    desc: [
      "Characteristic	Rising	Track	Arm	Rest	Design",
      "Premium	High	Gloss	Leatherette	Upholstery",
      "Independent	Headrest	And	Lumber	Support",
    ],
    img: "https://hometown.gumlet.io/media/product/00/1063/98569/1.jpg?mode=fill&w=273&h=273&dpr=1.3",
    ingredients: [{ ingName: "Sofa", qty: 1 }],
    title: "Two	Seater	Sofa",
  },
  {
    prodCode: "SF2S206",
    category: "Drawing",
    desc: ["Two	Seater	Sofa	in	Blue	Colour", "Assembly	by	Skilled	Carpenters"],
    img: "https://hometown.gumlet.io/media/product/08/4773/76457/1.jpg?mode=fill&w=273&h=273&dpr=1.3",
    ingredients: [{ ingName: "Sofa", qty: 1 }],
    title: "Two	Seater	Sofa",
  },
  {
    prodCode: "SFBD311",
    category: "Drawing",
    desc: [
      "Sofa	Cum	bed	in	Brown	Colour",
      "Ply-wood	construction	with	hand	polished	finish",
      "Removable	fabric	cover	on	best	quality	foam	mattress",
      "Throw	cushions	and	bolsters	come	with	the	product",
    ],
    img: "https://hometown.gumlet.io/media/product/77/4773/28529/1.jpg?mode=fill&w=273&h=273&dpr=1.3g",
    ingredients: [
      { ingName: "Sofa", qty: 1 },
      { ingName: "Cushions", qty: 2 },
    ],
    title: "Sofa	cum	Bed",
  },
  {
    prodCode: "BDQS381",
    category: "Bedroom",
    desc: [
      "Wood	Box	Storage	King	Size	Bed	in	Wenge	Colour	",
      "Box	Storage	included	for	Maximum	space	utilization",
      "Mattress	is	included",
    ],
    img: "https://hometown.gumlet.io/media/product/27/2153/55138/1.jpg?mode=fill&w=273&h=273&dpr=1.3",
    ingredients: [
      { ingName: "Bed", qty: 1 },
      { ingName: "Mattress", qty: 2 },
    ],
    title: "King	size	Bed",
  },
  {
    prodCode: "BDQS229",
    category: "Bedroom",
    desc: [
      "Wood	Hydraulic	Storage	Queen	Size	Bed",
      "Half	hydraulic	storage",
      "Superior	E2	grade	MDF	used	with	melamine	finish",
    ],
    img: "https://hometown.gumlet.io/media/product/73/5473/93376/1.jpg?mode=fill&w=273&h=273&dpr=1.3",
    ingredients: [{ ingName: "Bed", qty: 1 }],
    title: "Queen	size	Bed",
  },
  {
    prodCode: "ST1T425",
    category: "Study",
    desc: [
      "Wood	Study	Table	in	Walnut	Colour",
      "Assembly	by	Skilled	Carpenters",
      "Built	from	High	Quality	Wood",
    ],
    img: "https://hometown.gumlet.io/media/product/31/9353/34934/1.jpg?mode=fill&w=273&h=273&dpr=1.3",
    ingredients: [{ ingName: "Study	Table", qty: 1 }],
    title: "Study	Table",
  },
  {
    prodCode: "ST1T588",
    category: "Study",
    desc: [
      "	Wood	Study	Table	in	Highgloss	White	&	Blue	Colour",
      "Study	table	comes	with	bookshelf	on	top,	5	drawers	&	1	open	shelf",
      "Superior	quality	MDF	with	stain	resistant	melamine	finish",
    ],
    img: "https://hometown.gumlet.io/media/product/20/6673/89226/1.jpg?mode=fill&w=273&h=273&dpr=1.3",
    ingredients: [{ ingName: "Study	Table", qty: 1 }],
    title: "Study	Table",
  },
];
var port = process.env.PORT || 2410;
app.listen(port, () => console.log(`Node app listening on port ${port}!`));

app.post("/loginuser", function (req, res) {
  let body = { email: req.body.email, password: req.body.password };
  let obj = users.find(
    (obj) => obj.email === body.email && obj.password === body.password
  );
  if (obj === undefined)
    res.status(401).send("Login Failed. Check the username and password");
  else {
    res.send(obj);
  }
});

app.get("/products", function (req, res) {
  res.send(furnitureData);
});

app.get("/products/:category/:prodCode", function (req, res) {
  const category = req.params.category;
  const prodCode = req.params.prodCode;
  const product = furnitureData.find(
    (item) => item.category === category && item.prodCode === prodCode
  );

  if (product) {
    res.send(product);
  } else {
    res.status(404).send("Product not found");
  }
});

app.get("/products/:category", function (req, res) {
  const category = req.params.category;
  const product = furnitureData.filter((item) => item.category === category);

  if (product) {
    res.send(product);
  } else {
    res.status(404).send("Product not found");
  }
});

app.delete("/products/:category/:prodCode", function (req, res) {
  const category = req.params.category;
  const prodCode = req.params.prodCode;

  // Find the index of the product in the array
  const index = furnitureData.findIndex(
    (item) => item.category === category && item.prodCode === prodCode
  );

  if (index !== -1) {
    // Remove the product from the array
    furnitureData.splice(index, 1);
    res.send("Product deleted successfully");
  } else {
    res.status(404).send("Product not found");
  }
});

app.post("/products", function (req, res) {
  const newProductData = req.body; // Assuming the request body contains new product data

  // Add the new product to the array
  furnitureData.push(newProductData);

  res.status(201).send("Product added successfully");
});

app.put("/products/:category/:prodCode", function (req, res) {
  const category = req.params.category;
  const prodCode = req.params.prodCode;
  const updatedProductData = req.body; // Assuming the request body contains updated product data

  // Find the index of the product in the array
  const index = furnitureData.findIndex(
    (item) => item.category === category && item.prodCode === prodCode
  );

  if (index !== -1) {
    // Update the product with the new data
    furnitureData[index] = { ...furnitureData[index], ...updatedProductData };
    res.send("Product updated successfully");
  } else {
    res.status(404).send("Product not found");
  }
});
