export class HashManagerMock {
    public hash = async (plaintext: string): Promise<string> => {
        if (plaintext == "astrodev") {
            return "hash-astrodev"
        }

        return "hash-mock"
    }

    public compare = async (plaintext: string, hash: string): Promise<boolean> => {
        if (plaintext == "astrodev" && hash == "hash-astrodev") {
            return true
        }

        return false
    }
}