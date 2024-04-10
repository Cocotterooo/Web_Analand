import { createContext, useContext, useMemo, useReducer, useState } from "react"
import { applyDelta, Event, hydrateClientStorage, useEventLoop, refs } from "/utils/state.js"

<<<<<<< HEAD
export const initialState = {"state": {"is_hydrated": false, "router": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": ""}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}}}, "state.index_state": {}, "state.update_vars_internal_state": {}, "state.on_load_internal_state": {}}
=======
export const initialState = {"state": {"is_hydrated": false, "router": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": ""}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}}}, "state.index_state": {}}
>>>>>>> 577110be3a097b7c877ead6efd224bbba9e35780

export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {
  state: createContext(null),
  state__index_state: createContext(null),
  state__update_vars_internal_state: createContext(null),
  state__on_load_internal_state: createContext(null),
}
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}}

export const onLoadInternalEvent = () => [Event('state.on_load_internal')]

export const initialEvents = () => [
    Event('state.hydrate', hydrateClientStorage(clientStorage)),
    ...onLoadInternalEvent()
]

export const isDevMode = true

export function UploadFilesProvider({ children }) {
  const [filesById, setFilesById] = useState({})
  refs["__clear_selected_files"] = (id) => setFilesById(filesById => {
    const newFilesById = {...filesById}
    delete newFilesById[id]
    return newFilesById
  })
  return (
    <UploadFilesContext.Provider value={[filesById, setFilesById]}>
      {children}
    </UploadFilesContext.Provider>
  )
}

export function EventLoopProvider({ children }) {
  const dispatch = useContext(DispatchContext)
  const [addEvents, connectError] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  return (
    <EventLoopContext.Provider value={[addEvents, connectError]}>
      {children}
    </EventLoopContext.Provider>
  )
}

export function StateProvider({ children }) {
  const [state, dispatch_state] = useReducer(applyDelta, initialState["state"])
  const [state__index_state, dispatch_state__index_state] = useReducer(applyDelta, initialState["state.index_state"])
  const [state__update_vars_internal_state, dispatch_state__update_vars_internal_state] = useReducer(applyDelta, initialState["state.update_vars_internal_state"])
  const [state__on_load_internal_state, dispatch_state__on_load_internal_state] = useReducer(applyDelta, initialState["state.on_load_internal_state"])
  const dispatchers = useMemo(() => {
    return {
      "state": dispatch_state,
      "state.index_state": dispatch_state__index_state,
      "state.update_vars_internal_state": dispatch_state__update_vars_internal_state,
      "state.on_load_internal_state": dispatch_state__on_load_internal_state,
    }
  }, [])

  return (
    <StateContexts.state.Provider value={ state }>
    <StateContexts.state__index_state.Provider value={ state__index_state }>
    <StateContexts.state__update_vars_internal_state.Provider value={ state__update_vars_internal_state }>
    <StateContexts.state__on_load_internal_state.Provider value={ state__on_load_internal_state }>
      <DispatchContext.Provider value={dispatchers}>
        {children}
      </DispatchContext.Provider>
<<<<<<< HEAD
    </StateContexts.state__on_load_internal_state.Provider>
    </StateContexts.state__update_vars_internal_state.Provider>
=======
>>>>>>> 577110be3a097b7c877ead6efd224bbba9e35780
    </StateContexts.state__index_state.Provider>
    </StateContexts.state.Provider>
  )
}