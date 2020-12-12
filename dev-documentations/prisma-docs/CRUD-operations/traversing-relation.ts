import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
	const posts = await prisma.profile
		.findOne({
			where: { id: 1 },
		})
		.user()
		.posts();

	console.log(posts);
}

main()
	.catch((e) => {
		throw e;
	})
	.finally(async () => {
		await prisma.disconnect();
	});
