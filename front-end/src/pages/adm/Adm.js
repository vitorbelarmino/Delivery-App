import { useEffect, useContext } from 'react';
import Header from '../../components/group/Header';
import context from '../../context/index';

import styles from '../../styles/checkout.module.css';
import { Button } from '../../components';
import ItemUser from '../../components/group/ItemUser';
import getUsersByRole from '../../services/getApi';
import deleteUser from '../../services/adm.service';

function Adm() {
  const { users, setUsers } = useContext(context);

  const actionDelete = async (id) => {
    await deleteUser(id);
    const customers = await getUsersByRole('user/customer') || [];
    const sellers = await getUsersByRole('user/seller') || [];
    const allUsers = [...customers, ...sellers];
    setUsers(allUsers);
  };

  useEffect(() => {
    const request = async () => {
      const customers = await getUsersByRole('user/customer') || [];
      const sellers = await getUsersByRole('user/seller') || [];
      const allUsers = [...customers, ...sellers];
      setUsers(allUsers);
    };

    request();
  }, [users.length, setUsers]);

  return (

    <div className={ styles.checkout_container }>
      <Header labelNav="GERENCIAR USUÁRIOS" />
      <p>{ }</p>
      <ItemUser />
      <div className={ styles.legend }>Lista de usuários</div>

      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Tipo</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            users.length > 0
            && users.map(({ id,
              name,
              email,
              role,
            }, index) => (
              <tr key={ index }>
                <td
                  data-testid={
                    `admin_manage__element-user-table-item-number-${index}`
                  }
                >
                  { index + 1 }
                </td>
                <td
                  data-testid={
                    `admin_manage__element-user-table-name-${index}`
                  }
                >
                  { name }
                </td>
                <td
                  data-testid={
                    `admin_manage__element-user-table-email-${index}`
                  }
                >
                  { email }
                </td>
                <td
                  data-testid={
                    `admin_manage__element-user-table-role-${index}`
                  }
                >
                  { role }
                </td>

                <td>
                  <Button
                    label="Excluir"
                    onClick={ ({ target }) => actionDelete(target.value) }
                    disabled={ false }
                    id={
                      `admin_manage__element-user-table-remove-${index}`
                    }
                    className={ styles.btn_del }
                    value={ id.toString() }
                  />
                </td>
              </tr>
            ))
          }

        </tbody>
      </table>

    </div>

  );
}

export default Adm;
