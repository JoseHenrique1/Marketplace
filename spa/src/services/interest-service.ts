import { api } from "@/config/api";
import { InterestStatus, type Interest } from "@/types/interest-types";

export async function createProductInterest(productId: string, userId: string) {
  try {
    const response = await api.post<{ interest: Interest }>('/interests', { 
      productId, 
      userId, 
      status: InterestStatus.PENDING 
    })

    if (!response || response.status !== 201) throw new Error('Não autorizado');

    return response.data.interest;
  } catch (error) {
    console.log(error);
  }
  return null;
}

export async function getInterests() {
  try {
    const response = await api.get<{ interests: Interest[] }>(`/interests`)

    if (!response || response.status !== 200) throw new Error('Não autorizado');

    return response.data.interests;
  } catch (error) {
    console.log(error);
  }
  return null;
}


export async function getInterestsPerProduct(productId: string) {
  try {
    const response = await api.get<{ interests: Interest[] }>(`/interests/products/${productId}/interests`)

    if (!response || response.status !== 200) throw new Error('Não autorizado');

    return response.data.interests;
  } catch (error) {
    console.log(error);
  }
  return null;
}


export async function getInterestsPerUser(userId: string) {
  try {
    const response = await api.get<{ interests: Interest[] }>(`/interests/users/${userId}/interests`)

    if (!response || response.status !== 200) throw new Error('Não autorizado');

    return response.data.interests;
  } catch (error) {
    console.log(error);
  }
  return null;
}

export async function deleteInterest(userId: string, productId: string) {
  try {
    const response = await api.delete<{ interest: Interest }>(`/interests/products/${productId}/users/${userId}`)

    if (!response || response.status !== 200) throw new Error('Não autorizado');

    return response.data.interest;
  } catch (error) {
    console.log(error);
  }
  return null;
}


export async function patchInterest(userId: string, productId: string, status: InterestStatus) {
  try {
    const response = await api.patch<{ interest: Interest }>(
      `/interests/products/${productId}/users/${userId}`,
      { status: InterestStatus.ACCEPTED }
    )

    if (!response || response.status !== 200) throw new Error('Não autorizado');

    return response.data.interest;
  } catch (error) {
    console.log(error);
  }
  return null;
}

