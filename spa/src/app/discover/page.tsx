import { api } from "@/utils/api";

interface products {
	description: string;
	id:string;
	image: string;
	isAvailable: boolean;
	name:string;
	price: string;
	userId: string;
}

export default async function Discover() {
	const req = await api("/products");
	const { products }: { products: products[] } = await req.json();
	console.log(products);

	return (
		<div>
			discover
			<div>
				{products.map((product, id) => (
					<div key={id}>{product.name}</div>
				))}
			</div>
		</div>
	);
}
