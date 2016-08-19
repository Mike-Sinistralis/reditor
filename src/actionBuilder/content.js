const type = "TYPE_NAME";

function action(payload) {
  return {
    type,
    payload,
  };
}

export { type, action };
