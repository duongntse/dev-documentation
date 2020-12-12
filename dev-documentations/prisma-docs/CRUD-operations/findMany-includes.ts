import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

/* You can retrieve the posts of each user by using the include option. */
async function main() {
	const allUsers = await prisma.user.findMany({
		include: { posts: true, profile: true },
	});
	// use `console.dir` to print nested objects
	console.dir(allUsers, { depth: null });
}

main()
	.catch((e) => {
		throw e;
	})
	.finally(async () => {
		await prisma.disconnect();
	});
