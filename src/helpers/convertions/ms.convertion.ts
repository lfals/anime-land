interface Ittl {
  type: "days" | "hours" | "minutes" | "seconds";
  ttl: number;
}

const getInMs = (params: Ittl): number => {
  const convertions = {
    seconds: 1000,
    minutes: 1000 * 60,
    hours: 1000 * 60 * 60,
    days: 1000 * 60 * 60 * 24,
  };

  return params.ttl * convertions[params.type];
};

export default getInMs;
