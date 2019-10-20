import { Bundle } from "../models";

export const getBundles = async (req, res, next) => {
    try {
        const bundles = await Bundle.find().populate("items");
        return res.status(200).json(bundles);
    } catch (err) {
        next(err);
    }
};

export const createBundle = async (req, res, next) => {
    try {
        const bundle = await Bundle.create(req.body.bundle);
        const savedBundle = await bundle.save();
        return res.status(200).json(savedBundle);
    } catch (err) {
        next(err);
    }
};

export const getBundle = async (req, res, next) => {
    try {
        const bundle = await Bundle.findById(req.params.bundle_id).populate(
            "items"
        );
        return res.status(200).json(bundle);
    } catch (err) {
        next(err);
    }
};

export const updateBundle = async (req, res, next) => {
    try {
        let bundle = await Bundle.findByIdAndUpdate(
            req.params.bundle_id,
            req.body.bundle,
            { new: true }
        );

        return res.status(200).json(bundle);
    } catch (err) {
        next(err);
    }
};

export const deleteBundle = async (req, res, next) => {
    try {
        await Bundle.findByIdAndDelete(req.params.bundle_id);
        return res.sendStatus(204);
    } catch (err) {
        next(err);
    }
};
