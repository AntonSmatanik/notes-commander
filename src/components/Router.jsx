import React, { useEffect } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import useRest from '../services/useRest';
import Note from './elements/Note';
import Notes from './elements/Notes';

const Router = (() => {
    const rest = useRest();

    useEffect(() => {
        rest.getAllNotes('notes');
    }, [rest]);

    return (
        <div className="main-content">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/notes">
                        <Notes />
                    </Route>
                    <Route path="/notes/add">
                        <Note />
                    </Route>
                    <Route path="/notes/show/:id">
                        <Note />
                    </Route>
                    <Route path="/notes/edit/:id">
                        <Note />
                    </Route>
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <Redirect to="/notes" />
                        )}
                    />
                </Switch>
            </BrowserRouter>
        </div>
    );
});

export default Router;