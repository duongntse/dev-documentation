import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
	const posts = await prisma.user
		.findOne({
			where: { email: 'sarah@prisma.io' },
		})
		.posts();

	console.dir(posts, { depth: null });
}

main()
	.catch((e) => {
		throw e;
	})
	.finally(async () => {
		await prisma.disconnect();
	});
