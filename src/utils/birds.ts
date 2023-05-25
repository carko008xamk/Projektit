import { Bird } from '../types/bird';

const BIRD_STORAGE_KEY = 'birdwatcher_birds';

export const getBirds = (): Bird[] => {
    const birdsString = localStorage.getItem(BIRD_STORAGE_KEY);
    console.log('getBirds: birdsString', birdsString);
    if (birdsString) {
        const birds = JSON.parse(birdsString) as Bird[];
        console.log('getBirds: birds', birds);
        return birds.map((bird) => ({
            ...bird,
            date: new Date(bird.date),
        }));
    }
    return [];
};

export const saveBirds = (birds: Bird[]) => {
    console.log('saveBirds: birds', birds);
    const serializedBirds = JSON.stringify(
        birds.map((bird) => ({
            ...bird,
            date: bird.date.toISOString(),
        }))
    );
    try {
        localStorage.setItem(BIRD_STORAGE_KEY, serializedBirds);
    } catch (error) {
        console.error(error);
    }
};

