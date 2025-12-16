import { useState } from "react";
import { Eye, EyeOff, ArrowUpRight } from "lucide-react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="w-full max-w-md">
      <div className="flex items-start gap-4 mb-8">
        <div className="flex-1">
          <h1 className="text-2xl font-semibold text-foreground mb-2">
            Inicio de sesión de Webmail
          </h1>
          <p className="text-muted-foreground text-sm">
            Tu correo electrónico fácil, rápido y seguro.
          </p>
        </div>
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
          <span className="text-accent-foreground font-bold text-xl italic">w</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-foreground">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu correo electrónico"
            className="input-field"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium text-foreground">
            Contraseña
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
              className="input-field pr-12"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <button type="submit" className="btn-primary mt-6">
          Comenzar
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </form>

      <div className="mt-6 text-center">
        <a href="#" className="link-secondary">
          Ir al inicio de sesión de Hosting
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
