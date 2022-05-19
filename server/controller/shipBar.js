import { Shopify } from "@shopify/shopify-api";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllShipBar = async (req, res) => {
  try {
    const shipBar = await prisma.shipBars.findMany({
      include: { shopDetails: true },
    });
    res.status(201).json({ shipBar });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const createShipBar = async (req, res) => {
  try {
    const shipBar = await prisma.shipBars.create({
      data: req.body,
      include: { shopDetails: true },
    });
    res.status(201).json(shipBar);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const updateShipBar = async (req, res) => {
  try {
    const { id } = req.params;
    const shipBar = await prisma.shipBars.update({
      where: {
        uuid: Number(id),
      },
      data: req.body,
      include: { shopDetails: true },
    });
    res.status(201).json(shipBar);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteShipBar = async (req, res) => {
  try {
    const { id } = req.params;
    const shipBar = await prisma.shipBars.delete({
      where: {
        uuid: id,
      },

      include: { shopDetails: true },
    });
    res.status(201).json(shipBar);
  } catch (error) {
    res.status(500).json({ error });
  }
};
