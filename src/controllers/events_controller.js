import { Event } from "../models/event_model.js";
export const createEvent = async (req, res) => {
  const uid = req.user._id;
  const { name, occurance, startDate, endDate } = req.body;
  const event = new Event({
    uid: uid,
    name: name,
    occurance: occurance.toUpperCase(),
    startDate: startDate,
    endDate: endDate,
  });
  try {
    const savedEvent = await event.save();
    res.json(savedEvent);
  } catch (err) {
    res.json(err.message);
  }
};
export const allEvents = async (req, res) => {
  try {
    const allEvents = await Event.find();
    res.json(allEvents);
  } catch (err) {
    res.json(err.message);
  }
};
export const eventById = async (req, res) => {
  const { id } = req.params;

  try {
    const event = await Event.findOne({ _id: id });
    res.json(event);
  } catch (err) {
    res.json(err.message);
  }
};
export const usersEventById = async (req, res) => {
  const uid = req.user._id;
  try {
    const events = await Event.find({ uid: uid });
    res.json(events);
  } catch (err) {
    res.json(err.message);
  }
};
export const updateEvent = async (req, res) => {
  const { id } = req.params;
  const uid = req.user._id;
  const { name, occurance, startDate, endDate } = req.body;

  try {
    const user = await Event.findOne({ uid: uid });
    if (!user) return res.json("sorry you cant someone's else event");
    let event;
    if (name) {
      event = await Event.updateOne(
        { _id: id },
        {
          $set: {
            name: name,
          },
        },
      );
    }
    if (occurance) {
      event = await Event.updateOne(
        { _id: id },
        {
          $set: {
            occurance: occurance,
          },
        },
      );
    }

    if (startDate) {
      event = await Event.updateOne(
        { _id: id },
        {
          $set: {
            startDate: startDate,
          },
        },
      );
    }
    if (endDate) {
      event = await Event.updateOne(
        { _id: id },
        {
          $set: {
            endDate: endDate,
          },
        },
      );
    }
    res.json(event);
  } catch (err) {
    res.json(err.message);
  }
};
export const deleteById = async (req, res) => {
  const { id } = req.params;
  const uid = req.user._id;
  try {
    const user = await Event.findOne({ uid: uid });
    if (!user) return res.json("sorry you cant delete someone's else events");
    const event = await Event.deleteOne({ _id: id });
    res.json(event);
  } catch (err) {
    res.json(err.message);
  }
};
export const deleteAllEvents =async (req, res) => {
    
  const uid = req.user._id;

  try {
  
    const deletedEvents = await Event.deleteMany({uid:uid});
    res.json(deletedEvents);
  } catch (err) {
    res.json(err.message);
  }
};
