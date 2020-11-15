import React from 'react';

export default function SocialLogin() {
  useEffect(() => {
    if (isAuthenticated()) {
      getUser() === 'customer' ? this.props.history.push("/customer") : this.props.history.push("/retail");
    }
    else {
      const fid = getFeedbackTmp();
      // await api.get('/auth/success')
      await api.post("/auth/success", { fid })
        .then(response => {
          if (response.status === 200) return response.json();
          throw new Error("failed to authenticate user");
        })
        .then(responseJson => {
          console.log("passou na autenticação")
          const { success, login, token } = responseJson;
          this.setState({
            authenticated: success,
            isLoading: success,
          });
          console.log("set state ok")

          const { name, id, tu } = login;
          if (getFeedbackTmp() !== null) {
            api.post('/users/add/feedback', { user_id: id, tmp_feedback: getFeedbackTmp() })
          }
          console.log("nao entrou no feedback temp")

          localStorage.setItem("tk", token);
          localStorage.setItem("usr", name);
          localStorage.setItem("ui", id);
          localStorage.setItem("tu", tu);
          getUser() === 'customer' ? this.props.history.push("/customer") : this.props.history.push("/retail");

        })
        .catch(error => {
          this.setState({
            error: "Failed to authenticate user"
          });
        });
    }
  }, [])
  if (!isAuthenticated()) {
    return <LinearProgress />
  }
  else {
    const next = getUser() === 'customer' ? "/customer" : "/retail";
    return <Redirect to={next} />;
  }

}
