enum EnvNames {
  DEV = 'development',
  PROD = 'production',
  STAGING = 'staging',
}

type EnvNameKey = keyof typeof EnvNames

interface EnvMetadata {
  apiUrl: string
  name: EnvNames
}

class DevEnv implements EnvMetadata {
  apiUrl = 'http://localhost:8080'
  name = EnvNames.DEV
}

class ProdEnv implements EnvMetadata {
  apiUrl = 'https://estudantinder-api.herokuapp.com/'
  name = EnvNames.PROD
}

class StagingEnv implements EnvMetadata {
  apiUrl = 'https://estudantinder-api-staging.herokuapp.com/'
  name = EnvNames.STAGING
}

const createNewEnv = () => {
  switch (__ENV__) {
    case EnvNames.DEV:
      return new DevEnv()
    case EnvNames.PROD:
      return new ProdEnv()
    case EnvNames.STAGING:
      return new StagingEnv()
    default:
      throw new Error(`Invalid environment name: ${__ENV__}`)
  }
}

const Env: EnvMetadata = createNewEnv()

export default Env
