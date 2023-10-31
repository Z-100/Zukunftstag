export interface Drink {
    id: number,
    title: string,
    description: string,
    image: string,
    rating: number
}

export const drinks: Drink[] = [
    {
        id: 0,
        title: 'Bubble Tea',
        rating: 5,
        description: 'Bubble Tea ist ein  leckeres aus Schwarztee, Milch & Sirup bestehendes Getränk. Die gefüllten Bälle darf man natürlich nicht vergessen!',
        image: 'https://img.freepik.com/free-photo/arrangement-with-delicious-traditional-thai-tea_23-2148994366.jpg?t=st=1696582390~exp=1696582990~hmac=c63fc9f630ed6dd7c0b824456ee2e828cec1ad646c8b5dea4163735b8b8d38c4'
    },
    {
        id: 1,
        title: 'Haustee',
        rating: 4,
        description: 'Hausgemachter Eistee, gemacht mit viel Liebe! Minze, Wasser & Tee.',
        image: 'https://img.freepik.com/free-photo/front-view-herbal-tea-concept-with-lemon_23-2148555201.jpg?w=996&t=st=1696582460~exp=1696583060~hmac=839d487221252926f1e8a20523f24bf6e693f32c0867f9d539d15077a19d1964'
    },
    {
        id: 2,
        title: 'Coca Cola',
        rating: 4,
        description: 'Eine erfrischende Köstlichkeit. Etwas zu süss, trotzdem super lecker!!',
        image: 'https://img.freepik.com/free-photo/splashes-cold-cola-drink_144627-16209.jpg?w=1380&t=st=1696588400~exp=1696589000~hmac=7874ed628bf68ff159fe5258109df701eaa9067dfa6a0fcebcec67a8a4bb8166'
    },
    {
        id: 3,
        title: 'Limonade',
        rating: 3,
        description: 'Simpel in der Zubereitung und sehr erfrischend!!',
        image: 'https://img.freepik.com/free-photo/slices-fruits-near-glass-drink-with-ice-herbs-board_23-2148107705.jpg?w=1380&t=st=1696589849~exp=1696590449~hmac=22a2426c28139553e59da79fe6a7e5d9a14a401c84e5702f7eea377c0f2bdd0e'
    },
    {
        id: 5,
        title: 'Grün Tee',
        rating: 3,
        description: 'Schnell gemacht und sehr lecker. Gut gegen Halsschmerzen',
        image: 'https://img.freepik.com/free-photo/green-tea-jar-wooden-plate_23-2148320860.jpg?w=740&t=st=1696589858~exp=1696590458~hmac=63a6215f46db33561bbb803f326afc92dcca931c1679467affe63dc7fdb3c001'
    },
    {
        id: 6,
        title: 'Smoothie',
        rating: 4,
        description: 'Fruchtig + Gesund + Mixer = Lecker. Muss man da noch mehr sagen?',
        image: 'https://img.freepik.com/free-photo/vertical-shot-delicious-mix-berry-milkshake-with-different-berries-bowl-it_181624-2298.jpg?w=740&t=st=1696589871~exp=1696590471~hmac=65df7a1ea554a64608a95de635d34df8574061db67cebe5c7e42442ec8d132aa'
    },
    {
        id: 7,
        title: 'Milkshake',
        rating: 5,
        description: 'Super um den kleinen Hunger mit Flüssigware zu füllen',
        image: 'https://img.freepik.com/free-photo/gourmet-chocolate-dessert-with-fresh-berry-fruit-generative-ai_188544-8500.jpg?w=1800&t=st=1696589883~exp=1696590483~hmac=1fa5caa8744eeb7d3d7641f3fcbe83c7ed0adf63441ca0ed52156b8901481fce'
    },
    {
        id: 8,
        title: 'Water',
        rating: 3,
        description: 'Wer könnte schon Wasser vergessen? Man braucht\'s zum überleben!',
        image: 'https://img.freepik.com/free-photo/glass-water-macro-shot_53876-32234.jpg?w=1380&t=st=1696589895~exp=1696590495~hmac=0586479b59c53563d2be15935feb33f5a4150e41c1fb73e6dd3cfcd84a2fefa5'
    },
]
