enum InterestStatus {
  PENDING,
  ACCEPTED,
  REJECTED
}

interface Interest {
    userId: string;
    productId: string;
    status: InterestStatus;
}