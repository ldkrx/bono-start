import { YAML } from "bun";
import concurrently, { type ConcurrentlyCommandInput } from "concurrently";

const { apps } = YAML.parse(await Bun.file("config.yml").text()) as {
    apps: Record<string, ConcurrentlyCommandInput>;
};

concurrently(Object.values(apps));
