import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
	const deletedUser = await prisma.user.delete({
		where: { email: 'sarah@prisma.io' },
	});
	console.log(`deleted User`);
	console.log(deletedUser);
}

main()
	.catch((e) => {
		throw e;
	})
	.finally(async () => {
		await prisma.disconnect();
	});
