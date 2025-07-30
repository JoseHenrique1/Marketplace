import { prisma } from "../../database/prisma.ts";
import { InterestType } from "./interest.types.ts";

const postInterest = async (data: InterestType) => {
    const interest = await prisma.interest.create({ data });
	return interest;
}

const getInterestPerUser = async (userId: string) => {
    const interests = await prisma.interest.findMany({
        where: {
            userId
        },
    });
    return interests;
}

const getInterestPerProduct = async (productId: string) => {
    const interests = await prisma.interest.findMany({
        where: {
            productId
        },
    });
    return interests;
}

export const interestService = {
    postInterest,
    getInterestPerUser,
    getInterestPerProduct
};