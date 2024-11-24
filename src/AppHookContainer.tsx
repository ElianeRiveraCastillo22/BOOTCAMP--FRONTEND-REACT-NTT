import { AppRouter } from './AppRouter'
import { FilterProvider } from './context/filters/filters.provider'
import { ShoppingCartProvider } from './context/ShoppingCart.provider'
import { App } from './App'
import './App.css'

function ApphookContainer() {

    return (
        <ShoppingCartProvider>
            <FilterProvider>
                <App>
                    <AppRouter/>
                </App>
            </FilterProvider>
        </ShoppingCartProvider>

    )
}

export default ApphookContainer