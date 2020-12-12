import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
	const user = await prisma.user.create({
		data: {
			name: 'Harry',
			email: 'duongntse@prisma.io',
			posts: {
				create: {
					title: 'Join us for Prisma Day 2020',
					published: true,
				},
			},
			profile: {
				create: {
					bio: 'I like football',
				},
			},
		},
	});
	console.log(user);

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
