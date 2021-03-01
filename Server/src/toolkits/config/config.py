import dotenv
import argparse


def load_config():
    parser = argparse.ArgumentParser()
    parser.add_argument("--mode", help="Environment mode")
    args = parser.parse_args()

    if args.mode == None:
        args.__setattr__("mode","development")

    env_name = f'.env.{args.mode}'
    path = dotenv.find_dotenv(env_name)
    dotenv.load_dotenv(dotenv_path=path)
