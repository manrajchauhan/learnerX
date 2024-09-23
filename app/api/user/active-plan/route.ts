import { NextResponse } from 'next/server';

export async function GET(request: Request) {

    const activePlan = {

        _id: 'example_id',
        name: 'Example Plan',
        price: 100,
        priceYearly: 1000,
        description: 'This is an example subscription plan.',
    };


    return NextResponse.json(activePlan);
}
