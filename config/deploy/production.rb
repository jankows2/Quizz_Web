set :stage, :production

server 'krystian@app.raven.com',
       user: 'krystian',
       roles: %w{web app db},
       ssh_options: {
           user: 'krystian',
           forward_agent: true,
           keys: %w(~/.ssh/id_rsa),
           auth_methods: %w(publickey)
       }