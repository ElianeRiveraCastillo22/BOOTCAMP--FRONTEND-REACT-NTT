import './css/App.css'
import { AppRouter } from './AppRouter'
import { FilterProvider } from './context/filters/filters.provider'
import { ShoppingCartProvider } from './context/ShoppingCart/ShoppingCart.provider'

export function App() {

    return (
        <ShoppingCartProvider>
            <FilterProvider>
                <AppRouter />
            </FilterProvider>
        </ShoppingCartProvider>
    )
}
