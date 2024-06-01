import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const ANIMAL_TYPES = ['DOG', 'CAT'] as const;
type AnimalType = typeof ANIMAL_TYPES[number];

export const registerAnimal = async (req: Request, res: Response) => {
  const { name, age, breed, neighborhood, isForAdoption, isMissing, location, type, picture, userId } = req.body;

  if (!ANIMAL_TYPES.includes(type)) {
    return res.status(400).json({ error: 'Invalid animal type' });
  }

  try {
    const animal = await prisma.animal.create({
      data: {
        name,
        age,
        breed,
        neighborhood,
        isForAdoption,
        isMissing,
        location,
        type,
        picture,
        userId,
      },
    });
    res.status(201).json(animal);
  } catch (error) {
    res.status(400).json({ error: 'Failed to add animal' });
  }
};

export const getAnimals = async (req: Request, res: Response) => {
  try {
    const animals = await prisma.animal.findMany();
    res.status(200).json(animals);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve animals' });
  }
};
