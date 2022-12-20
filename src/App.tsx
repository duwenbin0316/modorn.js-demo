import { useEffect, useState } from 'react';
import { Switch, Route } from '@modern-js/runtime/router';
import { Table } from 'antd';
import users from '@api/users';

import './App.css';

const App = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const load = async () => {
      const _data = await users();

      setData(_data);
    };

    load();
  }, []);

  return (
    <Switch>
      <Route exact={true} path="/">
        <div className="container-box">
          <main>
            <div className="logo">
              <img
                src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ylaelkeh7nuhfnuhf/modernjs-cover.png"
                width="300"
                alt="Modern.js Logo"
              />
            </div>
            <p className="description">
              Get started by editing{' '}
              <code className="code">src/App.tsx11xx2</code>
            </p>
            <div id="users">{data && <Table dataSource={[]} />}</div>
          </main>
          <footer className="footer">
            <a
              href="https://modernjs.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by Modern.js
            </a>
          </footer>
        </div>
      </Route>
      <Route path="*">
        <div>404</div>
      </Route>
    </Switch>
  );
};

export default App;
