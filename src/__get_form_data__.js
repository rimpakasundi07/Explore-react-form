/**
 * 1.  e.target.[name of the input field].value
 * 2.  use form action and formdata in the action handler. formData.get('name of the input field')
 * 3. controlled component.one par each field use state on charge of the filed. Useful to dynamically handle error
 *
 * OR  3. ///
 *  handle all controlled field on one state object
 *
 *  const [formData , setFormData ] = useState({
 *  name: '' ,
 *  password: '' ,
 *  phone: '' ,
 *  })
 *
 * 4. uncontrolled using useRef
 *
 */
