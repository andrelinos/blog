import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div>
      <div>
        <div>
          <img src="/assets/logo.svg" alt="Logo DT Money" />
        </div>
        <footer className="text-sm">
          &copy; DT Money - {new Date().getFullYear()}
        </footer>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  )
}
