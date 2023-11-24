import React from 'react'
import { Auth } from "../../services/firebase/auth.service";
import { useRouter } from 'next/navigation'
import { useAuth } from '../../hooks/useAuth';
import copy from 'copy-to-clipboard';

export const UserOverview = () => {

    const auth = Auth.getInstance()
    const router = useRouter()

    const { user } = useAuth()

    React.useEffect(() => {
        console.log(user)
    }, [user])

    const signOut = () => {
        auth.signOut()
        router.push("/")
    }

    return (
        <div className='px-5 py-5 '>
            <div className='row bg-light'>
                <div className='col-md-4 my-auto'>
                    <div className='text-center py-3'>
                        <img src='https://static-00.iconduck.com/assets.00/user-avatar-robot-icon-2048x2048-ehqvhi4d.png' alt='User Image' width={200} />
                    </div>
                    <div style={{overflowX: 'auto'}}>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th colSpan={2} className='text-center'>Información Personal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>ID Usuario</th>
                                    <td onClick={() => copy(user.uid)}>
                                        <button className='p-0 link-primary'>
                                            {user.uid ? user.uid.slice(0, 5) : ""}... <i className="bx bx-copy" />
                                            </button>
                                        </td>
                                </tr>
                                <tr>
                                    <th>Rol</th>
                                    <td>{user.rol}</td>
                                </tr>
                                <tr>
                                    <th>Nombre</th>
                                    <td>{user.name}</td>
                                </tr>
                                <tr>
                                    <th>Apellido</th>
                                    <td>{user.lastname}</td>
                                </tr>
                                <tr>
                                    <th>Correo</th>
                                    <td>{user.email}</td>
                                </tr>
                                <tr>
                                    <th>Ubicación</th>
                                    <td>{user.location}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <button className='px-0 link-danger' onClick={() => signOut()}>
                        Cerrar Sesión
                    </button>
                </div>

                <div className='col-md-8 py-4'>
                    {/* Aquí widgets de control y aplicaciones */}
                    <div className='card h-100 p-4'>
                        <div className='text-center py-3'>
                            <img src='/images/iotwise-logo-black.svg' alt='User Image' width={120} />
                        </div>

                        <h4 className='text-center'>Servicios Disponibles</h4>

                        <div className='row py-5'>

                            <a href='https://store.iotwise.co' target='_blank' className='text-center col-lg-4'>
                                <div className="single-features">
                                    <i className="bx bx-store"></i>
                                    <h3>Tienda Online</h3>
                                </div>
                            </a>

                            <a href='https://senpai.app.iotwise.co' target='_blank' className='text-center col-lg-4'>
                                <div className="single-features">
                                    <i className="bx bx-laptop"></i>
                                    <h3>IoT Senpai®</h3>
                                </div>
                            </a>

                            <a href='https://cloouder.app.iotwise.co' target='_blank' className='text-center col-lg-4'>
                                <div className="single-features">
                                    <i className="bx bx-cloud"></i>
                                    <h3>Cloouder®</h3>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
