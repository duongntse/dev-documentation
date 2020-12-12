import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
	const filteredPosts = await prisma.post.findMany({
		where: {
			OR: [
				{ title: { contains: 'prisma' } },
				{ content: { contains: 'prisma' } },
			],
		},
	});
	console.log(filteredPosts);
}

main()
	.catch((e) => {
		throw e;
	})
	.finally(async () => {
		await prisma.disconnect();
	});
