package br.com.sgelider.sge.conf.database;

//import java.sql.Connection;
//import java.sql.SQLException;
//import java.util.HashMap;
//import java.util.Map;

//import org.hibernate.c3p0.internal.C3P0ConnectionProvider;
//import org.hibernate.engine.config.spi.ConfigurationService;
//import org.hibernate.service.spi.ServiceRegistryImplementor;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//
//import br.com.sgelider.sge.SgeLiderApplication;
//import br.com.sgelider.sge.conf.exception.SgeException;

public abstract class ConnectionPoolManager {
//	
//	 private static final Logger LOGGER = LoggerFactory.getLogger(ConnectionPoolManager.class);
//	 private static ServiceRegistryImplementor serviceRegistry;
//	 private static final Map<String, C3P0ConnectionProvider> CLIENTS = new HashMap<>();
//
//	 protected static void init(ServiceRegistryImplementor serviceRegistry) {
//	        ConnectionPoolManager.serviceRegistry = serviceRegistry;
//
//	        C3P0ConnectionProvider pool = new C3P0ConnectionProvider();
//	        pool.injectServices(ConnectionPoolManager.serviceRegistry);
//	        pool.configure(ConnectionPoolManager.serviceRegistry.getService(ConfigurationService.class).getSettings());
//	        CLIENTS.put(SgeLiderApplication.DB_DEFAULT, pool);
//	    }
//	 
//	 public static Connection getConnection(String tenancy) {
//	        try {
//	            Connection conn = CLIENTS.get(tenancy).getConnection();
//	            conn.setAutoCommit(false);
//	            return conn;
//	        } catch (SQLException e) {
//	            throw new SgeException("Erro ao pegar conexão com o tenancy", e.getCause());
//	        }
//	    }
//	 
//	 public static void addTenancy(String tenancy, @SuppressWarnings("rawtypes") Map properties) {
//	        System.out.println("addTenancy " + tenancy);
//	        if (!CLIENTS.containsKey(tenancy)) {
//	            LOGGER.info("adicionado " + tenancy + " no pool de conexões [inicio]");
//	            C3P0ConnectionProvider pool = new C3P0ConnectionProvider();
//	            pool.injectServices(ConnectionPoolManager.serviceRegistry);
//	            pool.configure(properties);
//	            CLIENTS.put(tenancy, pool);
//	            LOGGER.info("adicionado " + tenancy + " no pool de conexões [ok]");
//	        }
//	    }
//	 
//	 public static boolean containsTenancy(String tenancy) {
//	        return CLIENTS.containsKey(tenancy);
//	    }
//	 
//	 public static void closePoolTenancy(String tenancy) {
//	        if (CLIENTS.containsKey(tenancy)) {
//	            try {
//	                LOGGER.info("encerrando " + tenancy + " no pool de conexões [inicio]");
//	                CLIENTS.get(tenancy).stop();
//	                LOGGER.info("encerrando " + tenancy + " no pool de conexões [ok]");
//	            } catch (Exception ex) {
//	                ex.printStackTrace();
//	            }
//	            CLIENTS.remove(tenancy);
//	        }
//	    }
//	 
//	 public static void close(String tenancy, Connection conn) {
//	        try {
//	            CLIENTS.get(tenancy).closeConnection(conn);
//	        } catch (SQLException ex) {
//	            ex.printStackTrace();
//	        }
//	    }
//
//	    public static void closeAll() {
//	        CLIENTS.entrySet().forEach((entry) -> {
//	            entry.getValue().stop();
//	        });
//	        CLIENTS.clear();
//	    }
}
