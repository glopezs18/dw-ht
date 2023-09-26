const data = [
	{
		"id": 1,
		"title": "Leche Entera",
		"description": "Leche fresca y nutritiva",
		"category": "Lácteos",
		"price": 2.99,
		"image": "https://example.com/leche.jpg"
	},
	{
		"id": 2,
		"title": "Yogur Natural",
		"description": "Yogur sin azúcar añadida",
		"category": "Lácteos",
		"price": 1.29,
		"image": "https://example.com/yogur.jpg"
	},
	{
		"id": 3,
		"title": "Queso Cheddar",
		"description": "Queso cheddar maduro",
		"category": "Lácteos",
		"price": 4.99,
		"image": "https://example.com/queso.jpg"
	},
	{
		"id": 4,
		"title": "Mantequilla",
		"description": "Mantequilla cremosa",
		"category": "Lácteos",
		"price": 2.79,
		"image": "https://example.com/mantequilla.jpg"
	},
	{
		"id": 5,
		"title": "Huevos",
		"description": "Docena de huevos frescos",
		"category": "Lácteos",
		"price": 2.49,
		"image": "https://example.com/huevos.jpg"
	},
	{
		"id": 6,
		"title": "Pan Integral",
		"description": "Pan saludable con granos enteros",
		"category": "Panadería",
		"price": 1.99,
		"image": "https://example.com/pan_integral.jpg"
	},
	{
		"id": 7,
		"title": "Galletas de Chocolate",
		"description": "Galletas con trozos de chocolate",
		"category": "Panadería",
		"price": 2.99,
		"image": "https://example.com/galletas.jpg"
	},
	{
		"id": 8,
		"title": "Pan de Centeno",
		"description": "Pan de centeno recién horneado",
		"category": "Panadería",
		"price": 3.49,
		"image": "https://example.com/pan_centeno.jpg"
	},
	{
		"id": 9,
		"title": "Bagels de Queso",
		"description": "Bagels con queso suave",
		"category": "Panadería",
		"price": 2.49,
		"image": "https://example.com/bagels.jpg"
	},
	{
		"id": 10,
		"title": "Donas Glaseadas",
		"description": "Donas con glaseado dulce",
		"category": "Panadería",
		"price": 1.79,
		"image": "https://example.com/donas_glaseadas.jpg"
	},
	{
		"id": 11,
		"title": "Manzanas",
		"description": "Manzanas frescas y jugosas",
		"category": "Frutas",
		"price": 0.99,
		"image": "https://example.com/manzanas.jpg"
	},
	{
		"id": 12,
		"title": "Peras",
		"description": "Peras frescas y jugosas",
		"category": "Frutas",
		"price": 1.29,
		"image": "https://example.com/peras.jpg"
	},
	{
		"id": 13,
		"title": "Plátanos",
		"description": "Plátanos maduros y listos para comer",
		"category": "Frutas",
		"price": 0.79,
		"image": "https://example.com/platanos.jpg"
	},
	{
		"id": 14,
		"title": "Fresas",
		"description": "Fresas frescas y deliciosas",
		"category": "Frutas",
		"price": 3.99,
		"image": "https://example.com/fresas.jpg"
	},
	{
		"id": 15,
		"title": "Naranjas",
		"description": "Naranjas jugosas y llenas de vitamina C",
		"category": "Frutas",
		"price": 1.29,
		"image": "https://example.com/naranjas.jpg"
	},
	{
		"id": 16,
		"title": "Pechuga de Pollo",
		"description": "Pechuga de pollo sin hueso y piel",
		"category": "Carnes",
		"price": 6.49,
		"image": "https://example.com/pollo.jpg"
	},
	{
		"id": 17,
		"title": "Salmón Fresco",
		"description": "Filete de salmón fresco del Atlántico",
		"category": "Carnes",
		"price": 9.99,
		"image": "https://example.com/salmon.jpg"
	},
	{
		"id": 18,
		"title": "Carne Molida de Res",
		"description": "Carne molida de res magra",
		"category": "Carnes",
		"price": 7.99,
		"image": "https://example.com/carne_molida.jpg"
	},
	{
		"id": 19,
		"title": "Pollo Entero",
		"description": "Pollo entero fresco",
		"category": "Carnes",
		"price": 5.99,
		"image": "https://example.com/pollo_entero.jpg"
	},
	{
		"id": 20,
		"title": "Pavo Ahumado",
		"description": "Pavo ahumado de calidad premium",
		"category": "Carnes",
		"price": 8.49,
		"image": "https://example.com/pavo_ahumado.jpg"
	},
	{
		"id": 21,
		"title": "Café Molido",
		"description": "Café tostado y molido",
		"category": "Bebidas",
		"price": 4.49,
		"image": "https://example.com/cafe.jpg"
	},
	{
		"id": 22,
		"title": "Cerveza IPA",
		"description": "Cerveza India Pale Ale artesanal",
		"category": "Bebidas",
		"price": 5.99,
		"image": "https://example.com/cerveza_ipa.jpg"
	},
	{
		"id": 23,
		"title": "Agua Mineral",
		"description": "Agua mineral natural sin gas",
		"category": "Bebidas",
		"price": 1.99,
		"image": "https://example.com/agua_mineral.jpg"
	},
	{
		"id": 24,
		"title": "Refresco de Cola",
		"description": "Refresco de cola clásico",
		"category": "Bebidas",
		"price": 2.49,
		"image": "https://example.com/refresco_cola.jpg"
	},
	{
		"id": 25,
		"title": "Jugo de Naranja",
		"description": "Jugo de naranja fresco y natural",
		"category": "Bebidas",
		"price": 3.99,
		"image": "https://example.com/jugo_naranja.jpg"
	}
];

export default data;
