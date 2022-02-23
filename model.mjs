import mongoose from 'mongoose';

const connection = mongoose.createConnection('mongodb://localhost:27017/motivation');

const motivationSchema = mongoose.Schema({
    quote: { type: String },
    author: { type: String }
});

const Motivation = connection.model('Motivation', motivationSchema);

const CreateMotivation = async (quote, author) => {
    const newMotivation = new Motivation({quote: quote, author: author});
    return newMotivation.save();
}

const GetMotivation = async () => {
    const query = Motivation.aggregate([{ $sample: { size: 1 } }]);
    return query.exec();
};

export { CreateMotivation, GetMotivation };