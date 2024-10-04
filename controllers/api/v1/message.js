const index = (req, res, next) => {
    res.status(200).json({
      status: "success",
      message: "GET messages",
      data: {
        messages: [
          {
            id: 1,
            message: "Hello World",
            user: "John Doe",
          },
          {
            id: 2,
            message: "Hello Universe",
            user: "Jane Doe",
          },
        ],
      },
    });
  };

  const show = (req, res, next) => {
    res.status(200).json({
      status: "success",
      message: "GET message",
      data: {
        message: {
          id: req.params.id,
          message: "Hello World",
          user: "John Doe",
        },
      },
    });
  };

  const create =  (req, res, next) => {
    res.status(200).json({
      status: "success",
      message: "POST message",
      data: {
        message: req.body.message,
        user: req.body.user,
      },
    });
  };

  const update = (req, res, next) => {
    res.status(200).json({
      status: "success",
      message: "PUT message",
      data: {
        message: req.body.message,
        user: req.body.user,
      },
    });
  };

  const destroy = (req, res, next) => {
    res.status(200).json({
      status: "success",
      message: "DELETE message",
      data: {
        message: { _id: req.params.id },
      },
    });
  };

  module.exports = {
    index,
    show,
    create,
    update,
    destroy,
  }