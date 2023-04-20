import { Homepage } from './app/Homepage';
import { FeaturesPage } from './app/Featurespage';
import { Pricing } from './app/Pricing';
import { About } from './app/About';
import { Solutions } from './app/Solutions';

export const MainPage = () => {
    return (
        <main>
            <Homepage />
            <FeaturesPage />
            <Solutions />
            <Pricing />
            <About />
        </main>
    )
}