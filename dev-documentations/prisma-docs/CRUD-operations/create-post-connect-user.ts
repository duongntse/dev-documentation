import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
	// Create a new Post record and connect it to an existing User record
	const post = await prisma.post.create({
		data: {
			title: 'Prisma makes databases easy',
			author: {
				connect: { email: 'sarah@prisma.io' },
			},
		},
	});
	console.log(post);
	const allUsers = await prisma.user.findMany({
		include: { posts: true },
	});
	console.dir(allUsers, { depth: null });
}

main()
	.catch((e) => {
		throw e;
	})
	.finally(async () => {
		await prisma.disconnect();
	});
